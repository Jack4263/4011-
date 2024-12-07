fetch("team.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const teamMain = document.getElementById("TeamMain");

    const title = document.createElement("h1");
    title.textContent = data.title;

    const teamSec = document.createElement("section");
    teamSec.id = "TeamSec";
    teamMain.appendChild(teamSec);

    const member1 = document.createElement("article");
    const name1 = document.createElement("h3");
    name1.textContent = data.member1;
    member1.appendChild(name1);
    const pfp1 = document.createElement("img");
    pfp1.id = "TeamImage"
    pfp1.src = data.beapfp;
    member1.appendChild(pfp1);
    const role1 = document.createElement("p")
    role1.id = "role";
    role1.textContent = data.bearole;
    member1.appendChild(role1);
    const link1 = document.createElement("a")
    link1.href = data.bealink;
    link1.textContent = "Github Profile";
    member1.appendChild(link1);
    teamSec.appendChild(member1);

    const member2 = document.createElement("article");
    const name2 = document.createElement("h3");
    name2.textContent = data.member2;
    member2.appendChild(name2);
    const pfp2 = document.createElement("img");
    pfp2.id = "TeamImage"
    pfp2.src = data.jackpfp;
    member2.appendChild(pfp2);
    const role2 = document.createElement("p")
    role2.id = "role";
    role2.textContent = data.jackrole;
    member2.appendChild(role2);
    const link2 = document.createElement("a")
    link2.href = data.jacklink;
    link2.textContent = "Github Profile";
    member2.appendChild(link2);
    teamSec.appendChild(member2);

    const member3 = document.createElement("article");
    const name3 = document.createElement("h3");
    name3.textContent = data.member3;
    member3.appendChild(name3);
    const pfp3 = document.createElement("img");
    pfp3.id = "TeamImage"
    pfp3.src = data.spfp;
    member3.appendChild(pfp3);
    const role3 = document.createElement("p")
    role3.id = "role";
    role3.textContent = data.srole;
    member3.appendChild(role3);
    const link3 = document.createElement("a")
    link3.href = data.slink;
    link3.textContent = "Github Profile";
    member3.appendChild(link3);
    teamSec.appendChild(member3);

    const member4 = document.createElement("article");
    const name4 = document.createElement("h3");
    name4.textContent = data.member4;
    member4.appendChild(name4);
    const pfp4 = document.createElement("img");
    pfp4.id = "TeamImage"
    pfp4.src = data.lukepfp;
    member4.appendChild(pfp4);
    const role4 = document.createElement("p")
    role4.id = "role";
    role4.textContent = data.lukerole;
    member4.appendChild(role4);
    const link4 = document.createElement("a")
    link4.href = data.lukelink;
    link4.textContent = "Github Profile";
    member4.appendChild(link4);
    teamSec.appendChild(member4);
  })

  .catch(error => {
    console.error("Error loading the team page data:", error);
});