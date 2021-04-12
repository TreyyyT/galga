namespace SpriteKind {
    export const Arrow = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceShip, 50, 0)
    projectile.setKind(SpriteKind.Arrow)
})
sprites.onOverlap(SpriteKind.Arrow, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    music.zapped.play()
    info.changeScoreBy(1)
})
info.onLifeZero(function () {
    music.bigCrash.play()
    game.splash("SAD.")
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.ashes, 500)
    music.smallCrash.play()
})
let alien: Sprite = null
let alien2: Sprite = null
let projectile: Sprite = null
let spaceShip: Sprite = null
music.setVolume(10)
spaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . 8 1 1 1 1 1 1 1 1 8 . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spaceShip, 200, 200)
spaceShip.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    alien2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 4 4 . 
        . . . . . . . . . . . . 4 4 4 . 
        . 4 4 4 1 4 4 4 . . . 4 1 4 . . 
        4 f 4 4 1 4 4 4 1 . 4 4 4 1 . . 
        4 4 4 4 4 1 4 4 1 4 4 4 4 . . . 
        4 4 4 4 4 1 4 4 4 1 4 4 4 . . . 
        4 f 4 4 1 4 4 4 1 4 4 4 4 4 . . 
        f 4 4 4 1 4 4 4 1 . . 4 4 1 . . 
        . 4 4 4 1 4 4 4 . . . . 1 4 4 . 
        . . . . . . . . . . . . . 4 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    alien2.setVelocity(-75, 0)
    alien2.setPosition(160, randint(10, 120))
})
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
game.onUpdateInterval(500, function () {
    alien = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . . . a a . . . . . . a c c . 
        . . . . . a . . . . . a a . . . 
        . . . . . . a a a a a a . . . . 
        . . . . a a a b a a b a a . . . 
        . . . . a a a a a a a a a . . . 
        . . . a a a a b b b b a a a . . 
        . . . a a a a a a a a a a a . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    alien.setVelocity(-50, 0)
    alien.setPosition(160, randint(10, 120))
})
