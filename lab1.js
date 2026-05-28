import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function MyHobby() {
    return ( 
        <main>
       <p>Occassionally, I enjoy playing a game called
        League of Legends. League or LoL is a MOBA (Multiplayer Online Battle Arena) designed by indie studio Riot Games.
        I started playing it in 2017 and the rest is history. LoL is a game that has 172 champions to choose from.
        Initially, the choice in picking a champion was very daunting. Nevertheless, I settled my first champion to
        be Jax, the Grandmaster at Arms.

        <newline />
        Before talking about Jax, I want to clarify how a user would win at a classical game. A total of 5 people are assigned
        to a team with specific roles. While defending minions and structures, the team works with a singular goal: storm the enemy's base
        and disrupt their Nexus (Important Structure). Additionally, objectives (Monsters) will spawn in obscured
        parts of the map. They will give permanent or strong temporary buffs that will benefit a user's team.
        Ultimately, there's multiple ways to win a game as it progresses. 

        <newline />
        Personally, I prefer Jax's way of winning a game. He is a bruiser champion with a role fit for the top lane 
        (a lane that is towards the upper side of the map). My champion's playstyle revolves around destroying enemy
        structures without engaging in huge drawn fights with multiple people. Jax prefers to shutdown one opponent and
        cause pressure on the map as the game progresses. 

        <newline />
        "Who wants a piece of the champ?!"
       </p>
       </main>
    )
}

root.render(
        <MyHobby />
)