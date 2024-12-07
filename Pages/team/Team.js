fetch("Team.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const teamMain = document.getElementById("TeamMain");

    const title = document.createElement("h1");
    title.textContent = data.title;

    const teamSec = document.createElement("section");
    teamSec.id = "TeamSec";

    const member1 = document.createElement("article");
    const name1 = document.createElement("h3");
    name1.textContent = member1;
    article.appendChild(name1);
    const pfp1 = document.createElement("img");
    pfp1.id = "TeamImage"
    pfp1.data = beapfp;
    article.appendChild(pfp1);
    const role1 = document.createElement("p")
    role1.id = "role";
    role1.textContent = bearole;
    const link1 = createElement("a")
    link1.href = bealink;
    link1.textContent = "Github Profile";
    article.appendChild(link1);

    const member2 = document.createElement("article");
    const name2 = document.createElement("h3");
    name2.textContent = member2;
    article.appendChild(name2);
    const pfp2 = document.createElement("img");
    pfp2.id = "TeamImage"
    pfp2.data = jackpfp;
    article.appendChild(pfp2);
    const role2 = document.createElement("p")
    role2.id = "role";
    role2.textContent = jackrole;
    const link2 = createElement("a")
    link2.href = jacklink;
    link2.textContent = "Github Profile";
    article.appendChild(link2);

    const member3 = document.createElement("article");
    const name3 = document.createElement("h3");
    name3.textContent = member3;
    article.appendChild(name3);
    const pfp3 = document.createElement("img");
    pfp3.id = "TeamImage"
    pfp3.data = spfp;
    article.appendChild(pfp3);
    const role3 = document.createElement("p")
    role3.id = "role";
    role3.textContent = srole;
    const link3 = createElement("a")
    link3.href = slink;
    link3.textContent = "Github Profile";
    article.appendChild(link3);

    const member4 = document.createElement("article");
    const name4 = document.createElement("h3");
    name4.textContent = member4;
    article.appendChild(name4);
    const pfp4 = document.createElement("img");
    pfp4.id = "TeamImage"
    pfp4.data = lukepfp;
    article.appendChild(pfp4);
    const role4 = document.createElement("p")
    role4.id = "role";
    role4.textContent = lukerole;
    const link4 = createElement("a")
    link4.href = lukelink;
    link4.textContent = "Github Profile";
    article.appendChild(link4);
  })

  .catch(error => {
    console.error("Error loading the team page data:", error);
});