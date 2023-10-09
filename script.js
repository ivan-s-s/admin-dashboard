function random(range) {
    return Math.floor(Math.random() * range);
}

let avatarImg = random(8);

const avatar = document.querySelector('.avatar');
const newImg = document.createElement('img');
newImg.setAttribute('src', `./img/img${avatarImg}.png`);
newImg.setAttribute('alt', 'avatar');
newImg.setAttribute('id', 'avatar');
avatar.appendChild(newImg);

const avatarBigOne = document.querySelector('.avatarBigOne');
const newAvatar = document.createElement('img');
newAvatar.setAttribute('src', `./img/img${avatarImg}.png`);
newAvatar.setAttribute('alt', 'avatar');
newAvatar.setAttribute('id', 'avatarBigOne');
avatarBigOne.appendChild(newAvatar);