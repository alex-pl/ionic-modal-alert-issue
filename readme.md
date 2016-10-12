# ionic-modal-alert-issue

Test case for an Ionic 2 RC0 issue: https://github.com/driftyco/ionic/issues/8573

The test case is based on the Ionic template starter: `ionic start ionic-modal-alert-issue tutorial --v2`

## Run and Reproduce

1. Run `ionic serve` and wait until the App opens in the web browser.
2. Click the `Show Modal` button.

## What happens

1. The Modal opens.
2. When the Modal animation is finished, ionViewDidEnter() get's called.
3. The code in ionViewDidEnter() tries to create an Alert.
4. There's no Alert and the Modal disappears.