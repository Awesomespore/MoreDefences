const sourceTrail = newEffect(35, e => {
   // var offset = 0.3 + e.fin() * 0.4;
 //   var angle = Mathf.randomSeed(e.id, 360);
    Draw.alpha(Mathf.random(0.2, 0.1));
    Draw.color(Pal.plastaniumFront);
    Lines.circle(e.x, e.y, e.fout() * 3.4);
  //  Lines.circle(e.x + Angles.trnsx(angle, offset), e.y + Angles.trnsy(angle, offset), e.rotation - 90);
});

const sourceBullet = extend(BasicBulletType, {});

sourceBullet.bulletWidth = 12
sourceBullet.bulletHeight = 6
sourceBullet.lifetime = 80
sourceBullet.speed = 7
sourceBullet.damage = 50
sourceBullet.frontColor = Color.valueOf("f5cfff")
sourceBullet.backColor = Color.valueOf("8214ff")
sourceBullet.collidesAir = true;
sourceBullet.collidesTiles = false;

const sourceWeapon = extendContent(Weapon, "generic-bomber-weapon", {
  load(){
    this.region = Core.atlas.find("clear")
  }
});

sourceWeapon.reload = 120;
sourceWeapon.alternate = true;
sourceWeapon.shots = 2;
sourceWeapon.shootSound = Sounds.pew;
sourceWeapon.length = 0;
sourceWeapon.shootDelay = 6;
sourceWeapon.inaccuracy = 0;
sourceWeapon.spacing = 0;
sourceWeapon.bullet = sourceBullet;

const sourceShip = extendContent(Mech, "source-ship", {
  load(){
    this.weapon.load();
    this.region = Core.atlas.find(this.name);
  },

  updateAlt(player){
    if (!Vars.state.isPaused()) Effects.effect(sourceTrail, player.x, player.y /*- 5*/, player.rotation);
  }
});

sourceShip.weapon = sourceWeapon;
sourceShip.localizedName = "Source"
sourceShip.description = " A basic Interceptor ship. Fires bursts of 2 fast bullets at enemy air units."
sourceShip.speed = 1;
sourceShip.maxVelocity = 15;
sourceShip.drag = 0.09;
sourceShip.hitsize = 5;
sourceShip.mass = 0.25;
sourceShip.flying = true;
sourceShip.health = 100;
sourceShip.engineColor = Color.valueOf('e270ff');
sourceShip.range = 160;
sourceShip.engineSize = 1.5;
sourceShip.drillPower = 1;
sourceShip.mineSpeed = 1;
sourceShip.buildPower = 1.5;
sourceShip.itemCapacity = 10;
sourceShip.weaponOffsetY = 0;
sourceShip.weaponOffsetX = 0;
sourceShip.ejectEffect = shellEjectSmall;
