import Team from "./Team";

let memberDetailList = [
    {name:"Shehan Paul", role:"President", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/paul.png"},
    {name:"Sathira Liyanapathirana", role:"Joint Secretary", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/sathira.png"},
    {name:"Avishka Perera", role:"Joint Secretary", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/avishka.png"},
    {name:"Dhanoj Ninnada", role:"Treasurer", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/dhanoj.png"},
    {name:"Lahiru Rathuge", role:"Chief Organizer", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/lahiru.png"},
    {name:"Shehan Paul", role:"President", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/paul.png"},
    {name:"Sathira Liyanapathirana", role:"Joint Secretary", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/sathira.png"},
    {name:"Avishka Perera", role:"Joint Secretary", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/avishka.png"},
    {name:"Dhanoj Ninnada", role:"Treasurer", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/dhanoj.png"},
    {name:"Lahiru Rathuge", role:"Chief Organizer", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/lahiru.png"},
    {name:"Shehan Paul", role:"President", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/paul.png"},
    {name:"Sathira Liyanapathirana", role:"Joint Secretary", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/sathira.png"},
    {name:"Avishka Perera", role:"Joint Secretary", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/avishka.png"},
    {name:"Dhanoj Ninnada", role:"Treasurer", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/dhanoj.png"},
    {name:"Lahiru Rathuge", role:"Chief Organizer", twitterAccountName:"", facebookAccountName:"", instagramAccountName:"", avatarSRC:"avatars/lahiru.png"},
];

function TeamPage() {
    
    return (
        <div>
          <Team
              memberDetailList={memberDetailList}
              numberOfColumns={5} />
        </div>
    );
}

export default TeamPage;