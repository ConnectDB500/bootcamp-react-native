# install nvm from github.com/nvm

# install node version LTS in the powershell
nvm install 16.20.2
nvm use 16.20.2

# install expo
npm install --global expo-cli

#
npx create-expo-app my-app -t

# choose
blanch typescript

#
npx expo install react-dom react-native-web react-native-svg 
npm install -D @types/react-native

# create file babel.config.js
module.exports = function(api) {
api.cache(true);
  return {
  presents: ['babel-present-expo'],
  };
};

#
npx expo install @expo/metro-runtime@~5.0.4
npx expo export

# create file .expo-shared/assets.json
{
  "12bb71342c6255bbf50437ec8f4441c083f47cdb74bd89160c15e4f43e52a1cb": true,
  "40b842e832070c58deac6aa9e08fa459302ee3f9da492c7e77d93d2fbf4a56fd": true
}


# install node version 18 LTS in the powershell
nvm install 18.20.8
nvm use 18.20.8

# delete node_modules and package-lock.json

# reinstall node_module and package-lock.json
npm install

# create file .expo-shared/assets.
npx expo prebuild

#
npm run start

#
npx expo install @expo/webpack-config@^0.17.0