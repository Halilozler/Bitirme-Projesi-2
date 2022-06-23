using Backend.Businnes.Consrete;
using Backend.DataAccess.Abstract;
using Backend.DataAccess.Concrete;
using Backend.Entities.Concrete;
using Backend.Entities.DTOs;

namespace Backend.Businnes.Abstract
{
    public class HomeManager : IHomeService
    {
        private IHome _home;

        public HomeManager()
        {
            _home = new EfHome();
        }

        public UserDTO user(int user_id)
        {
            return _home.user(user_id);
        }

        public List<HomeDTO> GetAll(int kim_bakiyor_id)
        {
            return _home.GetPost(kim_bakiyor_id);
        }

        public void AddPost(Post post)
        {
            _home.SetPost(post);
        }

        public HomeDTO GetSinglePost(int id, int tur, int kim_bakiyor_id)
        {
            return _home.GetSinglePost(id,tur, kim_bakiyor_id);
        }

        public List<HomeDTO> GetUserPost(int user_id, int kim_bakiyor_id)
        {
            return _home.GetUserPost(user_id,kim_bakiyor_id);
        }

        public void Begen(int Post_id, int User_id)
        {
            _home.Begen(Post_id, User_id);
        }

        public List<YorumDTO> GetYorum(int post_id)
        {
            return(_home.getYorum(post_id));
        }

        public List<BildirimDTO> getBildirim(int user_id)
        {
            return _home.getBildirim(user_id);
        }

        public void YorumYap(YorumDTO dto)
        {
            _home.YorumYap(dto);
        }

        public void Tiklandi(int bildirim_id)
        {
            _home.Tiklandi(bildirim_id);
        }
    }
}
