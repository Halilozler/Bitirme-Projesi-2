using System.Linq.Expressions;
using Backend.Core.Entities;
using Backend.DataAccess;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;

namespace Backend.Core
{
    public static class EF
    {
        public static List<TEntity> GetAll<TEntity>(Expression<Func<TEntity, bool>> filter = null)
            where TEntity : class, IEntity
        {
            using (AnimalousContext _server = new AnimalousContext())
            {
                return filter == null ? _server.Set<TEntity>().ToList() : _server.Set<TEntity>().Where(filter).ToList();
            }
        }

        public static TEntity Get<TEntity>(Expression<Func<TEntity, bool>> filter) where TEntity : class, IEntity
        {
            using (AnimalousContext _server = new AnimalousContext())
            {
                return _server.Set<TEntity>().SingleOrDefault(filter);
            }
        }

        public static TEntity Add<TEntity>(TEntity entity) where TEntity : IEntity
        {
            using (AnimalousContext _server = new AnimalousContext())
            {
                _server.Add(entity);
                _server.SaveChanges();
                return entity;
            }
        }

        public static void Update<TEntity>(TEntity entity) where TEntity : IEntity
        {
            using (AnimalousContext _server = new AnimalousContext())
            {
                _server.Update(entity);
                _server.SaveChanges();
            }
        }
    }
}
