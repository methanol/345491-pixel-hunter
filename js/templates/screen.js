const screentemplate = (level) => {
  `<div class="game">
    <p class="game__task">${level.gameTask}</p>
    ${level.gameContent}
    <div class="stats">
      <ul class="stats">
        ${level.gameStat.map((it) => {
          `<li class="stats__result stats__result--${it}"></li>`
        }).join(``)}
      </ul>
    </div>
  </div>`
}
