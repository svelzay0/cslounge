<script lang="ts" setup>
  // onMounted(() => {
  //   // items: [] as { id: number, body: string, username: string, likes: number }[]
  //   const obj = {
  //     vidElement0,
  //     vidSource0
  //   };
  //   obj.vidElement0 = document.querySelector(`#video0`);
  //   obj.vidSource0 = `https://player.vimeo.com/progressive_redirect/playback/683765647/rendition/1080p?loc=external&signature=4d7458a7ce3a6bc76b16d4b3e447598fd2476ad4c6205d34e4b130d29f362150`;
  //   if (obj.vidElement0) {
  //     obj.vidElement0.src = obj.vidSource0;
  //     obj.vidElement0.style.display = 'block';
  //     obj.vidElement0.play();
  //   }
  //   // this.items  
  // });
</script>

<template>
  <section>
    <div>
      <!-- <div class="overlayer"></div> -->
      <!-- src="https://player.vimeo.com/progressive_redirect/playback/683765647/rendition/1080p?loc=external&signature=4d7458a7ce3a6bc76b16d4b3e447598fd2476ad4c6205d34e4b130d29f362150" -->
      <video
        id="video0"
        src="/weapons.webm"
        class="video-main"
        autoplay
        loop
        muted
        playsInline
      />
      <slot />
    </div>
  </section>
</template>
