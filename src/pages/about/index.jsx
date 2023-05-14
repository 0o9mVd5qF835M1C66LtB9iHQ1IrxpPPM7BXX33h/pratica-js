import Link from "next/link";
import { useState, useEffect } from "react";

const Card = ({ name, publicRepos, followers, avatar_url, bio, url }) => {
  return (
    <div class="">
      <div class="w-full rounded-xl p-12 shadow-2xl md:w-8/12 lg:w-6/12 bg-zinc-800 mb-8">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div class="grid-cols-1 lg:col-span-3">
            <div class="">
              <img
                src={avatar_url}
                alt=""
                className="h-[90px] w-[90px] rounded-full"
              />
            </div>
          </div>

          <div class="col-span-1 lg:col-span-9">
            <div class="text-center lg:text-left">
              <h2 class="text-2xl font-bold text-zinc-50">{name}</h2>
              <p class="mt-4 text-zinc-500">{bio}</p>
            </div>

            <div class="mt-6 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <p class="font-bold text-zinc-50">{publicRepos}</p>
                <p class="text-sm font-semibold text-zinc-50">Repositórios</p>
              </div>

              <div>
                <p class="font-bold text-zinc-50">{followers}</p>
                <p class="text-sm font-semibold text-zinc-50">Followers</p>
              </div>
              <Link
                href={url}
                target="_blank"
                class="w-full rounded-xl bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-primary-900 hover:text-zinc-800 flex items-center justify-center"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const [uniqueUsers, setUniqueUsers] = useState([]);

  const listUserGithub = ["alysomCRY", "ViniciusOliver-stack"];

  useEffect(() => {
    const fetchUsers = async () => {
      const users = [];
      for (let i = 0; i < listUserGithub.length; i++) {
        const response = await fetch(
          `https://api.github.com/users/${listUserGithub[i]}`
        );
        const data = await response.json();
        const index = users.findIndex((user) => user.id === data.id);
        if (index === -1) {
          users.push(data);
        }
      }
      setUniqueUsers(users);
    };

    fetchUsers();
  }, []);
  return (
    <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg-px-8 mt-10">
      <div className="flex gap-10 items-center">
        <div class="flex justify-center items-center">
          <div class="flex items-center justify-center w-14 h-14 -mx-2 overflow-hidden rounded-full">
            <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=140&q=80" />
          </div>

          <div class="flex items-center justify-center w-14 h-14 -mx-2 overflow-hidden rounded-full">
            <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=140&q=80" />
          </div>

          <div class="flex items-center justify-center w-14 h-14 -mx-2 overflow-hidden rounded-full">
            <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=140&q=80" />
          </div>

          <div class="flex items-center justify-center w-14 h-14 -mx-2 overflow-hidden rounded-full">
            <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" />
          </div>
        </div>
        <h2 className="text-white font-semibold text-2xl w-1/2">
          São + 20 voluntários que ajudam a manter o Pratica JS sempre
          atualizado.
        </h2>
      </div>

      {uniqueUsers.map((user) => (
        <div key={user.id}>
          <div class="flex justify-center items-center"></div>
          <Card
            name={user.name}
            publicRepos={user.public_repos}
            followers={user.followers}
            avatar_url={user.avatar_url}
            bio={user.bio}
            url={user.html_url}
          />
        </div>
      ))}
    </div>
  );
}
