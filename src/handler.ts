import * as Alexa from 'alexa-sdk'

module.exports.hello = (event: Alexa.RequestBody<any>, context: Alexa.Context) => {
  const alexa = Alexa.handler(event, context)
  alexa.appId = process.env.APPLICATION_ID
  alexa.registerHandlers({
    'Unhandled': function () {
      this.emit(':tell', 'よく分かりません')
    },
    'LaunchRequest': function () {
      this.emit(':tell', 'こんにちはアレクサ')
    },
    'AMAZON.StopIntent': function () {
      this.emit(':tell', 'さようならアレクサ')
    }
  })
  alexa.execute()
}
