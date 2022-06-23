using Backend.Core;
using Backend.DataAccess.Concrete;
using Backend.Entities.Concrete;
using Backend.Entities.DTOs;

namespace Backend.DataAccess.Abstract
{
    public class EfHome : IHome
    {

        public UserDTO user(int user_id)
        {
            User a = EF.Get<User>(x => x.id == user_id);
            return new UserDTO { ad = a.Ad, soyad = a.Soyad, puan = a.Puan };
        }

        public List<HomeDTO> GetPost(int kim_bakiyor_id)
        {
            List<HomeDTO> list = new List<HomeDTO>();
            List<Post> post = EF.GetAll<Post>();
            foreach (var item in post)
            {
                list.Add(cevirme(item, kim_bakiyor_id));
            }
            return Enumerable.Reverse(list).ToList();
        }

        public HomeDTO GetSinglePost(int id, int tur, int kim_bakiyor_id)
        {
            if (tur == 1)
            {
                Bildirim bildirim = new Bildirim();
                bildirim = EF.Get<Bildirim>(x => x.id == id);
                id = bildirim.Post_id;
            }
            return(cevirme(EF.Get<Post>(x => x.id == id), kim_bakiyor_id));

        }

        public List<HomeDTO> GetUserPost(int user_id, int kim_bakiyor_id)
        {
            List<Post> post = EF.GetAll<Post>(x => x.Kim_olusturdu_User_id == user_id);
            List<HomeDTO> list = new List<HomeDTO>();
            foreach (var item in post)
            {
                list.Add(cevirme(item, kim_bakiyor_id));
            }
            return Enumerable.Reverse(list).ToList();
        }

        private HomeDTO cevirme(Post post, int kim_bakiyor_id)
        {
            HomeDTO dto = new HomeDTO();
            dto.Tarih = post.Olusturulma_Tarih;
            User user = EF.Get<User>(x => x.id == post.Kim_olusturdu_User_id);
            dto.User_id = post.Kim_olusturdu_User_id;
            dto.Ad = user.Ad;
            dto.Soyad = user.Soyad;
            dto.puan = user.Puan;
            dto.Post_id = post.id;
            dto.Yazi = post.Yazi;
            dto.Begeni_sayisi = post.Gelen_Begeni_Sayisi;
            dto.Yorum_sayisi = post.Gelen_Yorum_Sayisi;

            Begenme begenme = EF.Get<Begenme>(x => x.kim_User_id == kim_bakiyor_id && x.Post_id == post.id);
            if (begenme == null)
            {
                dto.begendi = false;
            }
            else
            {
                dto.begendi = true;
            }
            
            return dto;
        }

        public void SetPost(Post post)
        {
            EF.Add<Post>(post);
        }

        public void Begen(int Post_id, int User_id)
        {
            //Tur = 1 Beğenme
            Post post = EF.Get<Post>(x => x.id == Post_id);
            post.Gelen_Begeni_Sayisi += 1;
            EF.Update(post);

            Begenme begenme = new Begenme
            {
                kim_User_id = User_id,
                Post_id = Post_id
            };
            EF.Add<Begenme>(begenme);

            Bildirim bildirim = new Bildirim
            {
                kim_yorum_yaptı_User_id = User_id,
                Kime_user_id = post.Kim_olusturdu_User_id,
                Tur = 1,
                Post_id = Post_id,
                Okundu = false
            };
            EF.Add<Bildirim>(bildirim);

             User user = EF.Get<User>(x => x.id == post.Kim_olusturdu_User_id);
             user.Puan += 1;
             EF.Update<User>(user);

        }

        public List<YorumDTO> getYorum(int Post_id)
        {
            var yorumlar = EF.GetAll<Yorum>(x => x.Post_id == Post_id);
            List<YorumDTO> list = new List<YorumDTO>();
            foreach (var item in yorumlar)
            {
                YorumDTO dto = new YorumDTO();
                var user = EF.Get<User>(x => x.id == item.Kim_Yapti_User_id);
                dto.id = item.id;
                dto.Ad = user.Ad;
                dto.Soyad = user.Soyad;
                dto.Text = item.Text;
                dto.Kim_Yaptı_User_id = item.Kim_Yapti_User_id;
                list.Add(dto);
            }
            return list;
        }

        public List<BildirimDTO> getBildirim(int user_id)
        {
            var bildirim = EF.GetAll<Bildirim>(x => x.Kime_user_id == user_id);
            List<BildirimDTO> list = new List<BildirimDTO>();

            foreach (var item in bildirim)
            {
                BildirimDTO dto = new BildirimDTO();
                dto.id = item.id;
                dto.post_id = item.Post_id;
                var user = EF.Get<User>(x => x.id == item.kim_yorum_yaptı_User_id);
                dto.Ad = user.Ad;
                dto.Soyad = user.Soyad;
                dto.Okundu = item.Okundu;
                dto.tur = item.Tur;

                list.Add(dto);
            }
            return Enumerable.Reverse(list).ToList();
        }

        public void YorumYap(YorumDTO yorum)
        {
            //Tur = 2 Yorum
            Yorum ekleYorum = new Yorum
            {
                Post_id = yorum.Post_id,
                Text = yorum.Text,
                Kim_Yapti_User_id = yorum.Kim_Yaptı_User_id,
            };
            EF.Add<Yorum>(ekleYorum);

            var post = EF.Get<Post>(x => x.id == yorum.Post_id);
            post.Gelen_Yorum_Sayisi += 1;
            EF.Update<Post>(post);

            Bildirim bildirim = new Bildirim
            {
                kim_yorum_yaptı_User_id = yorum.Kim_Yaptı_User_id,
                Kime_user_id = post.Kim_olusturdu_User_id,
                Tur = 2,
                Post_id = post.id,
                Okundu = false
            };
            EF.Add<Bildirim>(bildirim);
        }

        public void Tiklandi(int bildirim_id)
        {
            Bildirim bildirim = EF.Get<Bildirim>(x => x.id == bildirim_id);
            bildirim.Okundu = true;
            EF.Update<Bildirim>(bildirim);
        }
    }
}
