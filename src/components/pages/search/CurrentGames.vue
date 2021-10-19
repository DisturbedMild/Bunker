<template>
 <v-col col="7">
  <v-main class="mt-n13">
   <div class="current-lobbies">
    <h2
     class="white--text mb-2 font-weight-medium text-center current-lobbies__header"
    >
     Текущие игры
    </h2>
    <v-data-table
     :headers="headers"
     :items="lobbies"
     :items-per-page="10"
     :dark="true"
     :disable-sort="true"
     class="elevation-2 mt-4"

    >
    <template v-slot:item="row">
          <tr>
            <td>{{row.item.gameType}}</td>
            <td>{{row.item.players}}</td>
            <td>{{row.item.lobbieType}}</td>
            <td>{{row.item.gameStatus}}</td>
            <td v-if="row.item.gameStatus === 'Набор игроков'">
                <base-button :class="game-connect" @click="onButtonClick(row.item)">
                    Присоединится 
                </base-button>
            </td>
            <td v-else>
                <base-button :class="game-connect" @click="onButtonClick(row.item)" disabled>
                    Присоединится 
                </base-button>
            </td>
          </tr>
      </template>
    </v-data-table>
   </div>
  </v-main>
 </v-col>
</template>

<script>
export default {
 data() {
  return {
   headers: [
    { text: "Тип игры", value: "gameType" },
    { text: "Кол-во игроков", value: "players"},
    { text: 'Тип лобби', value: 'lobbieType' },
    { text: 'Статус игры', value: 'gameStatus' },
    {}
   ],
   lobbies: [
       {
           gameType: 'Рейтинговая',
           players: '4/12',
           lobbieType: 'Закрытое лобби',
           gameStatus: 'Набор игроков'
       },
       {
           gameType: 'Обычная',
           players: '0/12',
           lobbieType: 'Открытое лобби',
           gameStatus: 'Набор игроков'

       },
       {
           gameType: 'Рейтинговая',
           players: '12/12',
           lobbieType: 'Закрытое лобби',
           gameStatus: 'Идет игра'

       },
       {
           gameType: 'Обычная',
           players: '11/12',
           lobbieType: 'Закрытое лобби',
           gameStatus: 'Набор игроков'

       },
       {
           gameType: 'Рейтинговая',
           players: '0/12',
           lobbieType: 'Открытое лобби',
           gameStatus: 'Набор игроков'

       },
       {
           gameType: 'Рейтинговая',
           players: '4/12',
           lobbieType: 'Закрытое лобби',
           gameStatus: 'Идет игра'

       },
       {
           gameType: 'Рейтинговая',
           players: '4/12',
           lobbieType: 'Закрытое лобби',
           gameStatus: 'Набор игроков'

       },
   ]
  };
 },
};
</script>
