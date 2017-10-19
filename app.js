(function( doc ) {
  var running = false
  var notification = new Audio('https://notificationsounds.com/soundfiles/07563a3fe3bbe7e3ba84431ad9d055af/file-sounds-946-capisci.mp3');

  setInterval(function() {
    if (running) {
      return
    }

    let balance = $('csgr-roulette-wager').find('input').val()

    if (
      $('.round').eq(0).hasClass('red') &&
      $('.round').eq(1).hasClass('red') &&
      $('.round').eq(2).hasClass('red') &&
      $('.round').eq(3).hasClass('red') &&
      $('.round').eq(4).hasClass('red') 
    ) {
      console.log('RED TRAIN!')
      notification.play()
    }

    if (
      $('.round').eq(0).hasClass('black') &&
      $('.round').eq(1).hasClass('black') &&
      $('.round').eq(2).hasClass('black') &&
      $('.round').eq(3).hasClass('black') &&
      $('.round').eq(4).hasClass('black')
    ) {
      console.log('BLACK TRAIN!')
      notification.play()
    }

    //$("csgr-roulette-wager").find('button').eq(2).click()
    //$("csgr-scroll").find('.btn-3d-success').click()
  }, 3000)
})(document);