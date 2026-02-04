<template>
  <DetailPage
    :images="[
      {
        src: '/images/abt.jpeg',
        alt: 'Image of King Gizzard concert.',
      },
      // {
      //   src: '/images/abt1.JPG',
      //   alt: 'Image of nature',
      // },
      {
        src: '/images/abt2.jpeg',
        alt: 'Image of cat',
        landscape: true,
      },
      {
        src: '/images/abt4.jpeg',
        alt: 'Image of nature',
      },
      {
        src: '/images/abt3.jpeg',
        alt: 'Image of nature',
        landscape: true,
      },
    ]"
    color="bold-blue"
    top="Conner"
    heading="Parsley"
    title="Front-End Web Developer and Contractor"
  >
    <div class="font-bold text-bold-blue">
      <h1 class="uppercase font-bold font-sans header-3 mb-xs">
        About the Author
      </h1>
      <p>
        Conner Parsley is a Portland Oregon based Web Developer. He has worked
        for web agencies in the PNW for almost 10 years. He enjoys
        people-centric software, and developing the human element in his work.
      </p>
      <p>
        <br />
      </p>

      <p>
        When he's not devoted to his cats, Conner spends his free time creating
        deck-lists for card games, mastering D&D dungeons, and playing narrative
        video-games. His major childhood influences were media epics like
        Kingdom Hearts, the Lord of the Rings films, and young-adult fantasy at
        the turn of the century. Conner seeks to reach a greater understanding
        of others through sharing group narratives and expressive board and card
        games.
      </p>
      <br />
      <p>
        His recent obsessions have been the Arkham Horror Card Game, Magic the
        Gathering CUBE design, and the Curse of Strahd lore.
      </p>
      <h2 class="uppercase font-bold font-sans header-4 mt-lg mb-xs">
        About This Site
      </h2>
      <p>
        Parsley Garden was developed to be just that -- a curated, grown
        collection of projects made by Conner Parsley. Everyone needs a space to
        grow their creative brain. Some creatives keep notebooks, scrapbooks, or
        vision boards. This is all of that wrapped up in one.
      </p>
      <br />
      <p>
        Although self-serving Parsley Garden was also made to be an inspiration
        to others. The project is open-source and you can view it's code on
        Github.
      </p>
      <hr />
      <p>
        The Web has been walled off into closed communities like Reddit,
        Instagram, and other social medias. Creating an Internet filled with the
        personal art, voices, opinions, stories, and experiences is still
        possible without the burden of censorship or engagement politics.
      </p>
      <br />
      <p>Create your own things. Host your own voice. Grow more Gardens.</p>
    </div>
  </DetailPage>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "~/stores";

const globalStore = useGlobalStore();

globalStore.color = "bold-blue";
</script>
