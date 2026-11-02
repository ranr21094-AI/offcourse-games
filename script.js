const content={tycoon:{title:'足球大富翁',copy:'足球主题的休闲策略桌游。支持 2–4 位玩家同屏轮流游玩，也可加入 AI 玩家。选择具有独特技能的球星角色，在经典 40 格棋盘上收购真实俱乐部、集齐联赛组合，体验资金管理和朋友间的欢乐对抗。计划提供限定回合与完整对局两种模式。'},sweeper:{title:'罗哥扫雷',copy:'足球主题的逻辑扫雷冒险。通过数字推理对手的战力分布，决定探索和突破路线。以葡萄牙少年罗哥为主角，结合角色成长与足球技能构筑，探索从少年到传奇的旅程。当前处于原型开发阶段。'}};
const dialog=document.querySelector('#game-dialog');
document.querySelectorAll('[data-game]').forEach(button=>button.addEventListener('click',()=>{const game=content[button.dataset.game];document.querySelector('#dialog-title').textContent=game.title;document.querySelector('#dialog-copy').textContent=game.copy;dialog.showModal();}));
document.querySelectorAll('.close,.close-bottom').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
document.querySelector('#year').textContent=new Date().getFullYear();
