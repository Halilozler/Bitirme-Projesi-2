using Backend.Entities.Concrete;
using Backend.Entities.DTOs;

namespace Backend.DataAccess.Concrete
{
    public interface IHome
    {
        UserDTO user(int user_id);
        List<HomeDTO> GetPost(int kim_bakiyor_id);
        HomeDTO GetSinglePost(int id, int tur, int kim_bakiyor_id);
        List<HomeDTO> GetUserPost(int user_id, int kim_bakiyor_id);
        void SetPost(Post post);
        void Begen(int Post_id, int User_id);
        List<YorumDTO> getYorum(int Post_id);
        List<BildirimDTO> getBildirim(int user_id);
        void YorumYap(YorumDTO yorum);
        void Tiklandi(int bildirim_id);

    }
}
