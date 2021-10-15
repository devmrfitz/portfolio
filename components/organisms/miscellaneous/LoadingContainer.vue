<template>
  <AtomsBaseClassAttacher
    wn:w="full"
    wn:h="screen"
    wn:flex="~"
    wn:items="center"
    wn:justify="center"
    wn:m="!t-0px"
  >
    <AtomsBaseClassAttacher class="spinner-box">
      <AtomsBaseClassAttacher class="configure-border-1">
        <AtomsBaseClassAttacher class="configure-core" />
      </AtomsBaseClassAttacher>
      <AtomsBaseClassAttacher class="configure-border-2">
        <AtomsBaseClassAttacher class="configure-core" />
      </AtomsBaseClassAttacher>
    </AtomsBaseClassAttacher>
  </AtomsBaseClassAttacher>
</template>

<style lang="scss" scoped>
.spinner-box {
  align-items: center;
  background-color: transparent;
  display: flex;
  height: 300px;
  justify-content: center;
  width: 300px;
}

.configure-border-1 {
  align-items: center;
  animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
  background: #fb5b53;
  display: flex;
  justify-content: center;
  padding: 3px;
  position: absolute;
  @apply h-96px w-96px sm:(h-128px w-128px) 2xl:(h-192px w-192px);
}

.configure-border-2 {
  align-items: center;
  animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
  background: rgb(63, 249, 220);
  display: flex;
  justify-content: center;
  left: -115px;
  padding: 3px;
  transform: rotate(45deg);
  @apply h-96px w-96px sm:(h-128px w-128px) lg:(h-192px w-192px);
}

.configure-core {
  background-color: #1d1f22;
  height: 100%;
  width: 100%;
}

@keyframes configure-clockwise {
  0% {
    transform: rotate(0);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes configure-xclockwise {
  0% {
    transform: rotate(45deg);
  }

  25% {
    transform: rotate(-45deg);
  }

  50% {
    transform: rotate(-135deg);
  }

  75% {
    transform: rotate(-225deg);
  }

  100% {
    transform: rotate(-315deg);
  }
}
</style>
