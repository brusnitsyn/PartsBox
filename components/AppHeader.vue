<template>
  <AppContainer>
    <div class="flex flex-row justify-between py-3">
      <AppButton class="-ml-2" type="icon" @click="openMenu = true">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.75257 17.9997H21.2525C21.6668 17.9997 22.0025 18.3355 22.0025 18.7497C22.0025 19.1294 21.7204 19.4432 21.3543 19.4928L21.2525 19.4997H2.75257C2.33835 19.4997 2.00257 19.1639 2.00257 18.7497C2.00257 18.37 2.28472 18.0562 2.6508 18.0065L2.75257 17.9997H21.2525H2.75257ZM2.75257 11.5027H21.2525C21.6668 11.5027 22.0025 11.8385 22.0025 12.2527C22.0025 12.6324 21.7204 12.9462 21.3543 12.9959L21.2525 13.0027H2.75257C2.33835 13.0027 2.00257 12.6669 2.00257 12.2527C2.00257 11.873 2.28472 11.5592 2.6508 11.5095L2.75257 11.5027H21.2525H2.75257ZM2.75171 5.00293H21.2517C21.6659 5.00293 22.0017 5.33872 22.0017 5.75293C22.0017 6.13263 21.7195 6.44642 21.3535 6.49608L21.2517 6.50293H2.75171C2.33749 6.50293 2.00171 6.16714 2.00171 5.75293C2.00171 5.37323 2.28386 5.05944 2.64994 5.00978L2.75171 5.00293H21.2517H2.75171Z"
            fill="#212121"
          />
        </svg>
      </AppButton>
      <teleport to="body">
        <AppDrawer v-model:visible="openMenu">
          <template v-slot:content>Content2</template>
        </AppDrawer>
      </teleport>
      <div class="flex flex-row space-x-2 -mr-2">
        <AppButton type="icon" @click="openFavorite = true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8197 5.57961L11.999 6.40211L11.1757 5.57886C9.07663 3.4798 5.67337 3.4798 3.5743 5.57886C1.47523 7.67793 1.47523 11.0812 3.5743 13.1802L11.4697 21.0756C11.7626 21.3685 12.2374 21.3685 12.5303 21.0756L20.4318 13.1788C22.5262 11.0727 22.5298 7.67906 20.4303 5.57961C18.3274 3.47672 14.9226 3.47672 12.8197 5.57961ZM19.3682 12.121L12 19.4846L4.63496 12.1196C3.12168 10.6063 3.12168 8.15281 4.63496 6.63952C6.14824 5.12624 8.60176 5.12624 10.115 6.63952L11.4725 7.99697C11.7703 8.29483 12.255 8.28903 12.5457 7.98412L13.8803 6.64027C15.3974 5.12317 17.8526 5.12316 19.3697 6.64027C20.8833 8.15391 20.8807 10.6001 19.3682 12.121Z"
              fill="#212121"
            />
          </svg>
        </AppButton>
        <teleport to="body">
          <AppDrawer direction="rtl" v-model:visible="openFavorite">
            <template v-slot:content>
              <div class="flex flex-col">
                <div class="bg-accent-500 items-center flex px-2 py-3">
                  <AppButton type="icon" @click="openFavorite = false">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.39705 4.55379L4.46967 4.46967C4.73594 4.2034 5.1526 4.1792 5.44621 4.39705L5.53033 4.46967L12 10.939L18.4697 4.46967C18.7626 4.17678 19.2374 4.17678 19.5303 4.46967C19.8232 4.76256 19.8232 5.23744 19.5303 5.53033L13.061 12L19.5303 18.4697C19.7966 18.7359 19.8208 19.1526 19.6029 19.4462L19.5303 19.5303C19.2641 19.7966 18.8474 19.8208 18.5538 19.6029L18.4697 19.5303L12 13.061L5.53033 19.5303C5.23744 19.8232 4.76256 19.8232 4.46967 19.5303C4.17678 19.2374 4.17678 18.7626 4.46967 18.4697L10.939 12L4.46967 5.53033C4.2034 5.26406 4.1792 4.8474 4.39705 4.55379L4.46967 4.46967L4.39705 4.55379Z"
                      />
                    </svg>
                  </AppButton>
                  <span
                    class="
                      text-white
                      font-medium
                      text-lg text-center
                      grow
                      mr-10
                    "
                  >
                    ????????
                  </span>
                </div>

                <div class="px-4 py-3 mt-3">
                  <h3 class="font-medium">?????????? ?? ??????????????</h3>
                  <p class="text-sm lg:text-base leading-5 mt-2">
                    ??????????????, ?????????? ?????????????????? ???????????? ?? ??????????????????, ????????????
                    ?????????????????? ?? ???????????? ???????? ????????????
                  </p>
                  <TheAuthForm class="mt-4" />
                </div>
              </div>
            </template>
          </AppDrawer>
        </teleport>
        <AppButton type="icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 4.25C2.5 3.83579 2.83579 3.5 3.25 3.5H3.80826C4.75873 3.5 5.32782 4.13899 5.65325 4.73299C5.87016 5.12894 6.02708 5.58818 6.14982 6.00395C6.18306 6.00134 6.21674 6 6.2508 6H18.7481C19.5783 6 20.1778 6.79442 19.9502 7.5928L18.1224 14.0019C17.7856 15.1832 16.7062 15.9978 15.4779 15.9978H9.52977C8.29128 15.9978 7.2056 15.1699 6.87783 13.9756L6.11734 11.2045L4.85874 6.95578L4.8567 6.94834C4.701 6.38051 4.55487 5.85005 4.33773 5.4537C4.12686 5.0688 3.95877 5 3.80826 5H3.25C2.83579 5 2.5 4.66421 2.5 4.25ZM7.57283 10.8403L8.32434 13.5786C8.47333 14.1215 8.96682 14.4978 9.52977 14.4978H15.4779C16.0362 14.4978 16.5268 14.1275 16.68 13.5906L18.4168 7.5H6.58549L7.55906 10.7868C7.56434 10.8046 7.56892 10.8224 7.57283 10.8403ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19ZM9.5 19C9.5 18.7239 9.27614 18.5 9 18.5C8.72386 18.5 8.5 18.7239 8.5 19C8.5 19.2761 8.72386 19.5 9 19.5C9.27614 19.5 9.5 19.2761 9.5 19ZM18 19C18 20.1046 17.1046 21 16 21C14.8954 21 14 20.1046 14 19C14 17.8954 14.8954 17 16 17C17.1046 17 18 17.8954 18 19ZM16.5 19C16.5 18.7239 16.2761 18.5 16 18.5C15.7239 18.5 15.5 18.7239 15.5 19C15.5 19.2761 15.7239 19.5 16 19.5C16.2761 19.5 16.5 19.2761 16.5 19Z"
              fill="#212121"
            />
          </svg>
        </AppButton>
        <AppButton type="icon" @click="openUserMenu = true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7541 14.0002C18.9961 14.0002 20.0029 15.007 20.0029 16.2491V16.8245C20.0029 17.7188 19.6833 18.5836 19.1018 19.263C17.5324 21.0965 15.1453 22.0013 11.9999 22.0013C8.85401 22.0013 6.468 21.0962 4.9017 19.2619C4.32194 18.583 4.00342 17.7195 4.00342 16.8267V16.2491C4.00342 15.007 5.01027 14.0002 6.25229 14.0002H17.7541ZM17.7541 15.5002H6.25229C5.8387 15.5002 5.50342 15.8355 5.50342 16.2491V16.8267C5.50342 17.3624 5.69453 17.8805 6.04239 18.2878C7.29569 19.7555 9.26157 20.5013 11.9999 20.5013C14.7382 20.5013 16.7058 19.7555 17.9623 18.2876C18.3112 17.8799 18.5029 17.361 18.5029 16.8245V16.2491C18.5029 15.8355 18.1676 15.5002 17.7541 15.5002ZM11.9999 2.00488C14.7613 2.00488 16.9999 4.24346 16.9999 7.00488C16.9999 9.76631 14.7613 12.0049 11.9999 12.0049C9.23845 12.0049 6.99988 9.76631 6.99988 7.00488C6.99988 4.24346 9.23845 2.00488 11.9999 2.00488ZM11.9999 3.50488C10.0669 3.50488 8.49988 5.07189 8.49988 7.00488C8.49988 8.93788 10.0669 10.5049 11.9999 10.5049C13.9329 10.5049 15.4999 8.93788 15.4999 7.00488C15.4999 5.07189 13.9329 3.50488 11.9999 3.50488Z"
              fill="#212121"
            />
          </svg>
        </AppButton>
        <teleport to="body">
          <AppDrawer
            direction="rtl"
            v-model:visible="openUserMenu"
            width="w-[70%]"
          >
            <template v-slot:content>
              <div class="flex flex-col space-y-1.5 bg-gray-100">
                <div class="flex flex-col p-4 bg-white">
                  <span class="font-bold text-sm lg:text-base">
                    ???? ???? ????????????????????????
                  </span>
                  <AppButton class="mt-3">??????????</AppButton>
                </div>

                <div>
                  <div
                    class="
                      flex flex-row
                      justify-between
                      items-center
                      p-4
                      bg-white
                    "
                  >
                    <div class="flex items-center space-x-2.5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 4.25C2.5 3.83579 2.83579 3.5 3.25 3.5H3.80826C4.75873 3.5 5.32782 4.13899 5.65325 4.73299C5.87016 5.12894 6.02708 5.58818 6.14982 6.00395C6.18306 6.00134 6.21674 6 6.2508 6H18.7481C19.5783 6 20.1778 6.79442 19.9502 7.5928L18.1224 14.0019C17.7856 15.1832 16.7062 15.9978 15.4779 15.9978H9.52977C8.29128 15.9978 7.2056 15.1699 6.87783 13.9756L6.11734 11.2045L4.85874 6.95578L4.8567 6.94834C4.701 6.38051 4.55487 5.85005 4.33773 5.4537C4.12686 5.0688 3.95877 5 3.80826 5H3.25C2.83579 5 2.5 4.66421 2.5 4.25ZM7.57283 10.8403L8.32434 13.5786C8.47333 14.1215 8.96682 14.4978 9.52977 14.4978H15.4779C16.0362 14.4978 16.5268 14.1275 16.68 13.5906L18.4168 7.5H6.58549L7.55906 10.7868C7.56434 10.8046 7.56892 10.8224 7.57283 10.8403ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19ZM9.5 19C9.5 18.7239 9.27614 18.5 9 18.5C8.72386 18.5 8.5 18.7239 8.5 19C8.5 19.2761 8.72386 19.5 9 19.5C9.27614 19.5 9.5 19.2761 9.5 19ZM18 19C18 20.1046 17.1046 21 16 21C14.8954 21 14 20.1046 14 19C14 17.8954 14.8954 17 16 17C17.1046 17 18 17.8954 18 19ZM16.5 19C16.5 18.7239 16.2761 18.5 16 18.5C15.7239 18.5 15.5 18.7239 15.5 19C15.5 19.2761 15.7239 19.5 16 19.5C16.2761 19.5 16.5 19.2761 16.5 19Z"
                          fill="#212121"
                        />
                      </svg>
                      <span class="text-sm lg:text-base"> ???????????? </span>
                    </div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.46967 4.21967C8.17678 4.51256 8.17678 4.98744 8.46967 5.28033L15.1893 12L8.46967 18.7197C8.17678 19.0126 8.17678 19.4874 8.46967 19.7803C8.76256 20.0732 9.23744 20.0732 9.53033 19.7803L16.7803 12.5303C17.0732 12.2374 17.0732 11.7626 16.7803 11.4697L9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967Z"
                        fill="#212121"
                      />
                    </svg>
                  </div>

                  <div
                    class="
                      flex flex-row
                      justify-between
                      items-center
                      p-4
                      bg-white
                    "
                  >
                    <div class="flex items-center space-x-2.5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.8197 5.57961L11.999 6.40211L11.1757 5.57886C9.07663 3.4798 5.67337 3.4798 3.5743 5.57886C1.47523 7.67793 1.47523 11.0812 3.5743 13.1802L11.4697 21.0756C11.7626 21.3685 12.2374 21.3685 12.5303 21.0756L20.4318 13.1788C22.5262 11.0727 22.5298 7.67906 20.4303 5.57961C18.3274 3.47672 14.9226 3.47672 12.8197 5.57961ZM19.3682 12.121L12 19.4846L4.63496 12.1196C3.12168 10.6063 3.12168 8.15281 4.63496 6.63952C6.14824 5.12624 8.60176 5.12624 10.115 6.63952L11.4725 7.99697C11.7703 8.29483 12.255 8.28903 12.5457 7.98412L13.8803 6.64027C15.3974 5.12317 17.8526 5.12316 19.3697 6.64027C20.8833 8.15391 20.8807 10.6001 19.3682 12.121Z"
                          fill="#212121"
                        />
                      </svg>
                      <span class="text-sm lg:text-base"> ?????????????????? </span>
                    </div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.46967 4.21967C8.17678 4.51256 8.17678 4.98744 8.46967 5.28033L15.1893 12L8.46967 18.7197C8.17678 19.0126 8.17678 19.4874 8.46967 19.7803C8.76256 20.0732 9.23744 20.0732 9.53033 19.7803L16.7803 12.5303C17.0732 12.2374 17.0732 11.7626 16.7803 11.4697L9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967Z"
                        fill="#212121"
                      />
                    </svg>
                  </div>

                  <div
                    class="
                      flex flex-row
                      justify-between
                      items-center
                      p-4
                      bg-white
                    "
                  >
                    <div class="flex items-center space-x-2.5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.25 18C3.45507 18 2 16.5449 2 14.75V6.25C2 4.45507 3.45507 3 5.25 3H18.75C20.5449 3 22 4.45507 22 6.25V14.75C22 16.5449 20.5449 18 18.75 18H13.0125L7.99868 21.7507C7.44585 22.1642 6.6625 22.0512 6.24901 21.4984C6.08736 21.2822 6 21.0196 6 20.7499L5.99921 18H5.25ZM12.5135 16.5H18.75C19.7165 16.5 20.5 15.7165 20.5 14.75V6.25C20.5 5.2835 19.7165 4.5 18.75 4.5H5.25C4.2835 4.5 3.5 5.2835 3.5 6.25V14.75C3.5 15.7165 4.2835 16.5 5.25 16.5H7.49879L7.499 17.2498L7.49986 20.2506L12.5135 16.5Z"
                          fill="#212121"
                        />
                      </svg>

                      <span class="text-sm lg:text-base"> ???????????? </span>
                    </div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.46967 4.21967C8.17678 4.51256 8.17678 4.98744 8.46967 5.28033L15.1893 12L8.46967 18.7197C8.17678 19.0126 8.17678 19.4874 8.46967 19.7803C8.76256 20.0732 9.23744 20.0732 9.53033 19.7803L16.7803 12.5303C17.0732 12.2374 17.0732 11.7626 16.7803 11.4697L9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967Z"
                        fill="#212121"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <div
                    class="
                      flex flex-row
                      justify-between
                      items-center
                      p-4
                      bg-white
                    "
                  >
                    <div class="flex items-center space-x-2.5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0127 2.25C12.7466 2.25846 13.4777 2.34326 14.1942 2.50304C14.5069 2.57279 14.7408 2.83351 14.7763 3.15196L14.9465 4.67881C15.0235 5.37986 15.6155 5.91084 16.3211 5.91158C16.5108 5.91188 16.6984 5.87238 16.8737 5.79483L18.2743 5.17956C18.5656 5.05159 18.906 5.12136 19.1234 5.35362C20.1356 6.43464 20.8894 7.73115 21.3282 9.14558C21.4228 9.45058 21.3139 9.78203 21.0568 9.9715L19.8154 10.8866C19.4612 11.1468 19.2521 11.56 19.2521 11.9995C19.2521 12.4389 19.4612 12.8521 19.8161 13.1129L21.0587 14.0283C21.3158 14.2177 21.4248 14.5492 21.3302 14.8543C20.8916 16.2685 20.1382 17.5649 19.1266 18.6461C18.9093 18.8783 18.5693 18.9483 18.278 18.8206L16.8716 18.2045C16.4693 18.0284 16.0072 18.0542 15.627 18.274C15.2468 18.4937 14.9938 18.8812 14.9454 19.3177L14.7764 20.8444C14.7415 21.1592 14.5126 21.4182 14.2045 21.4915C12.7561 21.8361 11.247 21.8361 9.79852 21.4915C9.49039 21.4182 9.26153 21.1592 9.22667 20.8444L9.05785 19.32C9.00826 18.8843 8.75483 18.498 8.37491 18.279C7.995 18.06 7.53369 18.0343 7.13269 18.2094L5.72606 18.8256C5.43471 18.9533 5.09452 18.8833 4.87727 18.6509C3.86511 17.5685 3.11168 16.2705 2.67369 14.8548C2.57935 14.5499 2.68835 14.2186 2.94533 14.0293L4.18867 13.1133C4.54281 12.8531 4.75196 12.4399 4.75196 12.0005C4.75196 11.561 4.54281 11.1478 4.1882 10.8873L2.94565 9.97285C2.68828 9.78345 2.57918 9.45178 2.67386 9.14658C3.11261 7.73215 3.86643 6.43564 4.87861 5.35462C5.09608 5.12236 5.43643 5.05259 5.72773 5.18056L7.12811 5.79572C7.53105 5.97256 7.99429 5.94585 8.37626 5.72269C8.75658 5.50209 9.00977 5.11422 9.05866 4.67764L9.22873 3.15196C9.26425 2.83335 9.49835 2.57254 9.81129 2.50294C10.5286 2.34342 11.2604 2.25865 12.0127 2.25ZM12.0128 3.7499C11.5588 3.75524 11.106 3.79443 10.6583 3.86702L10.5494 4.84418C10.4476 5.75368 9.92052 6.56102 9.13091 7.01903C8.33646 7.48317 7.36785 7.53903 6.52507 7.16917L5.62678 6.77456C5.05485 7.46873 4.59963 8.25135 4.27901 9.09168L5.07681 9.67879C5.81562 10.2216 6.25196 11.0837 6.25196 12.0005C6.25196 12.9172 5.81562 13.7793 5.07759 14.3215L4.27853 14.9102C4.59887 15.752 5.05417 16.5361 5.62649 17.2316L6.53162 16.8351C7.36971 16.4692 8.33173 16.5227 9.12402 16.9794C9.9163 17.4361 10.4448 18.2417 10.5485 19.1526L10.6574 20.1365C11.5471 20.2878 12.4559 20.2878 13.3456 20.1365L13.4545 19.1527C13.5553 18.2421 14.0832 17.4337 14.8765 16.9753C15.6697 16.5168 16.6337 16.463 17.4733 16.8305L18.3777 17.2267C18.9495 16.5323 19.4046 15.7495 19.7252 14.909L18.9272 14.3211C18.1884 13.7783 17.7521 12.9162 17.7521 11.9995C17.7521 11.0827 18.1884 10.2206 18.9263 9.67847L19.7232 9.09109C19.4026 8.25061 18.9473 7.46784 18.3753 6.77356L17.4788 7.16737C17.1134 7.32901 16.7183 7.4122 16.3192 7.41158C14.8495 7.41004 13.616 6.30355 13.4556 4.84383L13.3467 3.8667C12.9012 3.7942 12.4531 3.75512 12.0128 3.7499ZM12.0002 8.24995C14.0713 8.24995 15.7502 9.92888 15.7502 12C15.7502 14.071 14.0713 15.75 12.0002 15.75C9.92912 15.75 8.25018 14.071 8.25018 12C8.25018 9.92888 9.92912 8.24995 12.0002 8.24995ZM12.0002 9.74995C10.7575 9.74995 9.75018 10.7573 9.75018 12C9.75018 13.2426 10.7575 14.25 12.0002 14.25C13.2428 14.25 14.2502 13.2426 14.2502 12C14.2502 10.7573 13.2428 9.74995 12.0002 9.74995Z"
                          fill="#212121"
                        />
                      </svg>

                      <span class="text-sm lg:text-base">
                        ?????????????????? ??????????????
                      </span>
                    </div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.46967 4.21967C8.17678 4.51256 8.17678 4.98744 8.46967 5.28033L15.1893 12L8.46967 18.7197C8.17678 19.0126 8.17678 19.4874 8.46967 19.7803C8.76256 20.0732 9.23744 20.0732 9.53033 19.7803L16.7803 12.5303C17.0732 12.2374 17.0732 11.7626 16.7803 11.4697L9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967Z"
                        fill="#212121"
                      />
                    </svg>
                  </div>

                  <div
                    class="
                      flex flex-row
                      justify-between
                      items-center
                      p-4
                      bg-white
                    "
                  >
                    <div class="flex items-center space-x-2.5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C17.523 2 22 6.478 22 12C22 17.522 17.523 22 12 22C6.477 22 2 17.522 2 12C2 6.478 6.477 2 12 2ZM12 3.667C7.405 3.667 3.667 7.405 3.667 12C3.667 16.595 7.405 20.333 12 20.333C16.595 20.333 20.333 16.595 20.333 12C20.333 7.405 16.595 3.667 12 3.667ZM12 15.5C12.5523 15.5 13 15.9477 13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5ZM12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5C14.75 10.5108 14.4525 11.074 13.6989 11.8586L13.5303 12.0303C12.9084 12.6522 12.75 12.9163 12.75 13.5C12.75 13.9142 12.4142 14.25 12 14.25C11.5858 14.25 11.25 13.9142 11.25 13.5C11.25 12.4892 11.5475 11.926 12.3011 11.1414L12.4697 10.9697C13.0916 10.3478 13.25 10.0837 13.25 9.5C13.25 8.80964 12.6904 8.25 12 8.25C11.3528 8.25 10.8205 8.74187 10.7565 9.37219L10.75 9.5C10.75 9.91421 10.4142 10.25 10 10.25C9.58579 10.25 9.25 9.91421 9.25 9.5C9.25 7.98122 10.4812 6.75 12 6.75Z"
                          fill="#212121"
                        />
                      </svg>

                      <span class="text-sm lg:text-base">
                        ?????????????????????? ??????????????????
                      </span>
                    </div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.46967 4.21967C8.17678 4.51256 8.17678 4.98744 8.46967 5.28033L15.1893 12L8.46967 18.7197C8.17678 19.0126 8.17678 19.4874 8.46967 19.7803C8.76256 20.0732 9.23744 20.0732 9.53033 19.7803L16.7803 12.5303C17.0732 12.2374 17.0732 11.7626 16.7803 11.4697L9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967Z"
                        fill="#212121"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </template>
          </AppDrawer>
        </teleport>
      </div>
    </div>
  </AppContainer>
</template>

<script>
export default {
  data: () => ({
    openMenu: false,
    openFavorite: false,
    openUserMenu: false,
  }),
};
</script>

<style>
</style>