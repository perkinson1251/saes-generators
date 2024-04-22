<script lang="ts" setup>
import { onMounted } from 'vue'

interface Props {
  template: string
  nameTemplate: string
}

interface TemplateData {
  [key: string]: string
}

const props = defineProps<Props>()

function replaceInputs() {
  let body = document.body
  if (!body) return

  let textNodes = getTextNodes(body)

  textNodes.forEach(function (node) {
    let matches = node!.nodeValue!.match(/%(\w+)\.(\w+)%/)
    if (matches) {
      let type = matches[1]
      let attributeName = matches[2]
      let element = null

      if (type === 'input') {
        element = document.createElement('input')
        element.setAttribute('type', 'text')
        element.setAttribute('class', 'form-control')
      }

      if (type === 'textarea') {
        element = document.createElement('textarea')
        element.setAttribute('class', 'form-control')
      }

      if (element) {
        element.setAttribute('id', attributeName)
        node!.parentNode!.replaceChild(element, node)
      }
    }
  })
}

function getTextNodes(element: any) {
  let textNodes = []
  // let walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
  let walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null)
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode)
  }
  return textNodes
}

function escapeRegExp(string: any) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function replaceMarkers(templateString: any, data: any) {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      let regex = new RegExp('%(?:input|textarea)\\.' + escapeRegExp(key) + '%', 'g')
      templateString = templateString.replace(regex, data[key])
    }
  }
  return templateString
}

function processData() {
  let data: TemplateData = {}
  let inputs: NodeListOf<HTMLInputElement | HTMLTextAreaElement> = document.querySelectorAll(
    'input[type="text"], textarea'
  )
  inputs.forEach(function (input) {
    data[input.id] = input.value
  })
  let templateString = props.template
  let templateNameString = props.nameTemplate
  let resultString = replaceMarkers(templateString, data)
  let resultNameString = replaceMarkers(templateNameString, data)
  const resultNameElement: HTMLInputElement | null = document.getElementById(
    'result-name'
  ) as HTMLInputElement
  const resultElement: HTMLTextAreaElement | null = document.getElementById(
    'result'
  ) as HTMLTextAreaElement
  if (resultNameElement && resultElement) {
    resultNameElement.value = resultNameString
    resultElement.value = resultString
  }
  navigator.clipboard.writeText(resultString).then(
    function () {
      console.log('[COPY]: SUCCESS')
    },
    function (err) {
      console.error('[COPY]: ERROR. ', err)
    }
  )
}

onMounted(() => {
  replaceInputs()
})

document.addEventListener('DOMContentLoaded', function () {
  replaceInputs()
})
</script>
<template>
  <main class="container">
    <div class="generator__main-content">
      <slot />
    </div>
    <div class="generator__footer">
      <input class="form-control" id="result-name" />
      <textarea class="form-control" id="result" rows="10" cols="50"></textarea>
      <button class="btn btn-success" id="processButton" @click="processData">
        Сгенерировать форму
      </button>
    </div>
  </main>
</template>
<style scoped>
.generator__main-content {
  width: 800px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
}

.generator__footer {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
}

input.form-control {
  display: inline;
  width: auto;
}
</style>
