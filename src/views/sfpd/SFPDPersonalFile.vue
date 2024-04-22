<script lang="ts" setup>
import { FormLayout } from '@/layouts/FormLayout/'
import { ref } from 'vue'
const template = ref<string>(`[paper][center][size=150][b]SAN FIERRO POLICE DEPARTMENT[/b][/size]
[size=120]GARCIA COMMUNITY POLICE STATION
PERSONAL FILE[/size][/center]
[size=120][center]%input.position% — %input.namesurname%, #%input.jet%[/center][/size]
[b][size=120]I ЛИЧНАЯ ИНФОРМАЦИЯ[/size][/b]
[hr=black][/hr]
[coll3][a=Дата рождения]%input.dob%[/a]|[a=Возраст (полных лет)]%input.age%[/a]|[a=Пол]%input.sex%[/a][/coll3]
[coll][a=Национальность]%input.nationality%[/a]|[a=Номер телефона]%input.number%[/a][/coll]

[b][size=120]II ИНФОРМАЦИЯ О СЛУЖБЕ[/size][/b]
[hr=black][/hr]
[coll][a=Дата поступления на службу]%input.start%[/a]|[a=Стаж службы (полных лет)]%input.timeonservice%[/a][/coll][/paper]`)

const nameTemplate = ref<string>(`%input.position% — %input.namesurname%, #%input.jet%`)
</script>
<template>
  <FormLayout :template="template" :nameTemplate="nameTemplate">
    <div
      style="
        background-color: #ffffff;
        border: 1px solid #000000;
        margin: 10px 10px;
        padding-left: 5px;
        padding: 15px;
      "
    >
      <div align="center">
        <span style="font-size: 150%; line-height: 116%"
          ><span style="font-weight: bold">SAN FIERRO POLICE DEPARTMENT</span></span
        ><br /><span style="font-size: 120%; line-height: 116%"
          >GARCIA COMMUNITY POLICE STATION<br />PERSONAL FILE</span
        >
      </div>
      <br /><span style="font-size: 120%; line-height: 116%"
        ><div align="center">
          <span>Позиция - </span>%input.position% <br />
          <span>Имя Фамилия - </span>%input.namesurname% <br />
          <span>Жетон - </span>%input.jet%
        </div></span
      ><br /><span style="font-weight: bold"
        ><span style="font-size: 120%; line-height: 116%">I ЛИЧНАЯ ИНФОРМАЦИЯ</span></span
      ><br />
      <div style="padding: 1px; background-color: black"><span></span></div>
      <br />
      <table width="100%">
        <tbody>
          <tr>
            <td style="vertical-align: top; width: 26%; padding-right: 10px">
              <span style="font-weight: bold; font-size: 90%; line-height: 116%">Дата рождения</span
              ><br />
              <div style="background-color: white; color: #555; border: 1px solid #ccc">
                %input.dob%
              </div>
            </td>
            <td style="vertical-align: top; width: 26%">
              <span style="font-weight: bold; font-size: 90%; line-height: 116%"
                >Возраст (полных лет)</span
              ><br />
              <div style="background-color: white; color: #555; border: 1px solid #ccc">
                %input.age%
              </div>
            </td>
            <td style="vertical-align: top; width: 26%; padding-left: 10px">
              <span style="font-weight: bold; font-size: 90%; line-height: 116%">Пол</span><br />
              <div style="background-color: white; color: #555; border: 1px solid #ccc">
                %input.sex%
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table width="100%">
        <tbody>
          <tr>
            <td style="vertical-align: top; width: 50%; padding-right: 10px">
              <span style="font-weight: bold; font-size: 90%; line-height: 116%"
                >Национальность</span
              ><br />
              <div style="background-color: white; color: #555; border: 1px solid #ccc">
                %input.nationality%
              </div>
            </td>
            <td style="vertical-align: top; width: 50%; padding-left: 10px">
              <span style="font-weight: bold; font-size: 90%; line-height: 116%"
                >Номер телефона</span
              ><br />
              <div style="background-color: white; color: #555; border: 1px solid #ccc">
                %input.number%
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br /><br /><span style="font-weight: bold"
        ><span style="font-size: 120%; line-height: 116%">II ИНФОРМАЦИЯ О СЛУЖБЕ</span></span
      ><br />
      <div style="padding: 1px; background-color: black"><span></span></div>
      <br />
      <table width="100%">
        <tbody>
          <tr>
            <td style="vertical-align: top; width: 50%; padding-right: 10px">
              <span style="font-weight: bold; font-size: 90%; line-height: 116%"
                >Дата поступления на службу</span
              ><br />
              <div style="background-color: white; color: #555; border: 1px solid #ccc">
                %input.start%
              </div>
            </td>
            <td style="vertical-align: top; width: 50%; padding-left: 10px">
              <span style="font-weight: bold; font-size: 90%; line-height: 116%"
                >Стаж службы (полных лет)</span
              ><br />
              <div style="background-color: white; color: #555; border: 1px solid #ccc">
                %input.timeonservice%
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </FormLayout>
</template>
