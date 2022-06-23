using Backend.Entities.Concrete;
using Backend.Entities.DTOs;

namespace Backend.Businnes.Consrete
{
    public interface IHomeService
    {
        UserDTO user(int user_id);
        List<HomeDTO> GetAll(int kim_bakiyor_id);
        void AddPost(Post post);
        HomeDTO GetSinglePost(int id, int tur, int kim_bakiyor_id);
        List<HomeDTO> GetUserPost(int user_id, int kim_bakiyor_id);
        void Begen(int Post_id, int User_id);
        List<YorumDTO> GetYorum(int post_id);
        List<BildirimDTO> getBildirim(int user_id);
        void YorumYap(YorumDTO dto);
        void Tiklandi(int bildirim_id);
    }
}
