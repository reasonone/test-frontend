const multipleBaconHandler = () => {
  const baconImage = document.getElementsByTagName('img')[0];
  const baconContainer = document.getElementsByTagName('section')[1];

  baconContainer.append(baconImage.cloneNode());
};

const getButtonElement = () => document.getElementsByTagName('button')[0];

export default function mountMoreBaconHandler() {
  const buttonElement = getButtonElement();

  buttonElement.addEventListener('click', multipleBaconHandler);
}

export const unmountMoreBaconHandler = () => {
  const buttonElement = getButtonElement();

  buttonElement.removeEventListener('click', multipleBaconHandler);
};
