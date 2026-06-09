import "react";
import TeamMem1 from "../assets/staticImages/team1.webp";
import TeamMem2 from "../assets/staticImages/team2.webp";
import TeamMem3 from "../assets/staticImages/team3.webp";
import TeamMem4 from "../assets/staticImages/team4.webp";
import FacebookIcon from "../assets/icons/facebook.png";
import TwitterIcon from "../assets/icons/twitter.png";
import GooglePlusIcon from "../assets/icons/google-plus.png";
function OurTeam() {
  const TeamMembersData = [
    {
      id: 1,
      image: TeamMem1,
      name: "Marcos Alonso",
      role: "Web Designer",
    },
    {
      id: 2,
      image: TeamMem2,
      name: "Luis Aragonos",
      role: "Web Developer",
    },
    {
      id: 3,
      image: TeamMem3,
      name: "Maria Alessis",
      role: "Graphic Designer",
    },
    {
      id: 4,
      image: TeamMem4,
      name: "John Doe",
      role: "Php Dev",
    },
  ];
  return (
    <div className="ourTeam">
      <div className="ourTeamMembersContainer">
        <h3 className="ourTeamTitle">OUR TEAM</h3>
        <div className="teamMembersWrapper">
          {TeamMembersData.map((item) => {
            return (
              <div className="teamItems" key={item.id}>
                <div className="ImageAndIconsContainer">
                  <img
                    src={item.image}
                    alt="teamMembersImg"
                    className="teamMembersImg"
                  />
                  <ul className="TMSocialMIconsWrapper">
                    <li className="TMSocialITems">
                      <img src={FacebookIcon} className="TMSocialMIcons" />
                    </li>
                    <li className="TMSocialITems">
                      <img src={TwitterIcon} className="TMSocialMIcons" />
                    </li>
                    <li className="TMSocialITems">
                      <img src={GooglePlusIcon} className="TMSocialMIcons" />
                    </li>
                  </ul>
                </div>
                <div className="teamMembersInfo">
                  <h2 className="teamMembersName">{item.name}</h2>
                  <p className="teamMembersRole">{item.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
