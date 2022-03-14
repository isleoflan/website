<template>
  <section class="attendees container--flex">
    <h1>Teilnehmer</h1>
    <div class="list">
      <div class="card attendee" v-for="attendee in attendees" :key="attendee.id">
        <img class="avatar" :src="attendee.avatar">
        <span class="name">
          <span :class="`status status-${attendee.status}`"></span>
          <span v-if="attendee.squad" class="squad">
            [{{attendee.squad.short}}]
          </span>
          {{attendee.username}}
        </span>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data(){
      return {
        attendees: [],
      };
    },
    created(){
      fetch("https://api.shop.isleoflan.ch/v1/public/attendees").then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(response);
        }
      }).then(response => response.data)
      .then((result) => {
        this.attendees = result;
      });
    },
    methods: {
      btnClick() {
        alert('clicked');
      }
    }
  }
</script>
<style scoped lang="scss">
  @use "../style/abstracts" as *;
  @use "../style/elements/card";
  :global(.container__inner) {
    width: 100%;
  }
  .attendees{
    width: 100%;
  }
  .list{
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;
    width: 100%;
    @include for-tablet-portrait-up{
      grid-template-columns: repeat(2, 1fr);
    }
    @include for-desktop-up{
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .attendee{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
  }
  .avatar{
    width: 30%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    @include box-shadow;
  }
  
  .name{
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    @include for-tablet-landscape-up{
      font-size: 1.3rem;
    }
  }
  .status{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #000;

    &-BOUGHT{
      background: $yellow-dark;
    }
    &-PAYED{
      background: $yellow-regular;
    }
    &-CHECKIN{
      background: $blue-regular;
    }
  }
  .squad{
    font-weight: $font-bold;
  }
  .card{
    padding-left: 10px;
    padding-right: 10px;
  }
</style>