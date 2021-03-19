scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(true, effects.bubbles)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    info.changeLifeBy(-2e-8)
})
scene.setBackgroundColor(9)
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.updateSprite()
tiles.setTilemap(tilemap`level_3`)
myCorg.follow()
myCorg.verticalMovement()
info.setLife(2)
