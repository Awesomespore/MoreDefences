// Ground Units

// Cannoneer Line
// Cannoneer
const CannonT1 = extendContent(UnitType, "cannoneer-mech", {});
CannonT1.constructor = () => extend(UnitEntity, {});
Blocks.groundFactory.plans.add(new UnitFactory.UnitPlan(CannonT1, 60 * 25, ItemStack.with(Items.silicon, 15, Items.graphite, 30)));

// Artilleryman
var cannont2upgrade = new Seq([Vars.content.getByName(ContentType.unit, "more-defences-ivyx-cannoneer-mech"), Vars.content.getByName(ContentType.unit, "more-defences-ivyx-artilleryman-mech")]);
Blocks.additiveReconstructor.upgrades.add(cannont2upgrade.toArray(UnitType));


// Air Units

// Swarmer Line
// Swarmer
const SwarmT1 = extendContent(UnitType, "swarmer-ship", {});
SwarmT1.constructor = () => extend(UnitEntity, {});
Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(SwarmT1, 60 * 5, ItemStack.with(Items.silicon, 5, Items.copper, 5)));
