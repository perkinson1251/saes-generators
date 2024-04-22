<script lang="ts" setup>
import { FormLayout } from '@/layouts/FormLayout/'
import { ref } from 'vue'
const template =
  ref<string>(`[mail][sfpd-header][/sfpd-header][center][font=Times New Roman][size=160][b]Back Home Program[/b][/size][/font][/center][hr][/hr][b][size=120]Application[/size][/b]

[size=90][b]Фракции, в которых вы состояли (включая никнеймы, проекты, лидеры и причины ухода):[/b]
%textarea.ans1%[/size]
[size=90][b]Планы на будущего персонажа:[/b]
%input.ans2%[/size]

[size=90][b]Ccылка на форумный аккаунт (G-RP):[/b] %input.ans3%[/size]
[size=90][b]ПОЛНЫЙ Скриншот защиты (Телеграм, Google):[/b] %input.ans4%[/size]
[size=90][b]Полный скриншот окна ЮЦП:[/b] %input.ans5%[/size]
[size=90][b]Ссылка на страницу ВКонтакте:[/b] %input.ans6%[/size]

[size=90][b]Скриншоты вашей игры (СС, необязательно за копов):[/b]
%input.ans7%[/size]
[size=90][b]Список пожеланий:[/b] %input.ans8%[/size]
[hr][/hr]


Подавая заявление, я автоматически соглашаюсь со всеми правилами подачи заявления в программу возвращения домой.[/mail]`)

const nameTemplate = ref<string>(`[Back Home] %input.namesurname% (%input.ooc%)`)
</script>
<template>
  <FormLayout :template="template" :nameTemplate="nameTemplate">
    <span>Имя Фамилия</span> %input.namesurname%<br />
    <span>ООС ник</span> %input.ooc%
    <div
      style="
        border: 1px solid #000;
        padding: 45px;
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
      "
    >
      <span style="font-family: times new roman">
        <div align="center">
          <span style="font-size: 200%; line-height: normal">SAN FIERRO POLICE DEPARTMENT</span
          ><br />
          <div style="padding: 0px 0px 10px 0px">
            <span style="font-size: 150%; line-height: normal">«Gold in peace, Iron in war»</span>
          </div>
        </div>
      </span>
      <div class="aligned">
        <div style="display: flex; align-items: center">
          <div style="padding: 0px 10px 0px 0px">
            <img
              class="postimage"
              alt="Изображение"
              src="https://i.imgur.com/Qgb0BTE.png"
              style="max-width: 100px"
            />
          </div>
          <br />
          <div align="center">
            1351, Rich Street,<br />Financial, San Fierro, SA<br />ZIP-CODE: 356212
          </div>
        </div>
        <div style="display: flex; align-items: center">
          <div align="center">Ray Walsh<br />CHIEF OF POLICE<br />SAN FIERRO POLICE</div>
          <div style="padding: 0px 0px 0px 10px">
            <img
              class="postimage"
              alt="Изображение"
              src="https://i.imgur.com/lzeu2V5.png"
              style="max-width: 100px"
            />
          </div>
        </div>
      </div>

      <div align="center">
        <span style="font-family: Times New Roman"
          ><span style="font-size: 160%; line-height: 116%"
            ><span style="font-weight: bold">Back Home Program</span></span
          ></span
        >
      </div>
      <hr />
      <span style="font-weight: bold"
        ><span style="font-size: 120%; line-height: 116%">Application</span></span
      ><br /><br /><span style="font-size: 90%; line-height: 116%"
        ><span style="font-weight: bold"
          >Фракции, в которых вы состояли (включая никнеймы, проекты, лидеры и причины ухода):</span
        ><br />%textarea.ans1%</span
      ><br /><span style="font-size: 90%; line-height: 116%"
        ><span style="font-weight: bold">Планы на будущего персонажа:</span
        ><br />%textarea.ans2%</span
      ><br /><br /><span style="font-size: 90%; line-height: 116%"
        ><span style="font-weight: bold">Ccылка на форумный аккаунт (G-RP):</span>
        %input.ans3%</span
      ><br /><span style="font-size: 90%; line-height: 116%"
        ><span style="font-weight: bold">ПОЛНЫЙ Скриншот защиты (Телеграм, Google):</span>
        %input.ans4%</span
      ><br /><span style="font-size: 90%; line-height: 116%"
        ><span style="font-weight: bold">Полный скриншот окна ЮЦП:</span> %input.ans5%</span
      ><br /><span style="font-size: 90%; line-height: 116%"
        ><span style="font-weight: bold">Ссылка на страницу ВКонтакте:</span> %input.ans6%</span
      ><br /><br /><span style="font-size: 90%; line-height: 116%"
        ><span style="font-weight: bold">Скриншоты вашей игры (СС, необязательно за копов):</span
        ><br />%textarea.ans7%</span
      ><br /><span style="font-size: 90%; line-height: 116%"
        ><span style="font-weight: bold">Список пожеланий:</span> %input.ans8%</span
      ><br />
      <hr />
      <br /><br /><br />Подавая заявление, я автоматически соглашаюсь со всеми правилами подачи
      заявления в программу возвращения домой.
    </div>
  </FormLayout>
</template>
<style scoped>
.aligned {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 750px) {
    flex-direction: column;
  }
}
</style>
