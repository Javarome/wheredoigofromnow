export class BoardWebView {
  constructor(private anchor: Element) {
  }

  log(message: string) {
    let messageElement = document.createElement("p")
    messageElement.innerText = message
    this.anchor.append(messageElement)
  }

  prompt<T = string>(question: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      let questionAnswer = document.createElement("input")
      questionAnswer.id = "question-"
      let questionLabel = document.createElement("label")
      questionLabel.innerText = question
      questionLabel.setAttribute("for", questionAnswer.id)
      this.anchor.append(questionLabel)
      this.anchor.append(questionAnswer)
      questionAnswer.onchange = (ev) => {
        resolve(questionAnswer.value as unknown as T)
      }
    })
  }
}
