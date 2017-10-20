(function( doc ) {
  var notification = new Audio('https://notificationsounds.com/soundfiles/07563a3fe3bbe7e3ba84431ad9d055af/file-sounds-946-capisci.mp3');
  console.log('Now you are betting better, created by Gabriel Angelus')

  let defaultValue = 7

  $('csgr-header section .nav-underlined').eq(1).prepend('<li style="margin-right: 10px" class="nav-item"><input style="width: 60px" class="form-control" id="train-length" value="'+ defaultValue +'"></li>')

  setInterval(function() {
    let balance = $('csgr-roulette-wager').find('input').val()
    let isTrain = true
    let trainLength = $("#train-length").val()

    for (let i=0; i<(trainLength-1); i++) {
      if ($('.round').eq(i).attr('class') != $('.round').eq(i+1).attr('class')) {
        isTrain = false
        break;
      }
    }

    if (isTrain) {
      console.log(`It's a ${$('.round').eq(0).attr('class').split(' ')[1]} one dude!`)
      notification.play()
    }

    /*if (
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
    }*/

    //$("csgr-roulette-wager").find('button').eq(2).click()
    //$("csgr-scroll").find('.btn-3d-success').click()
  }, 3000)
})(document);