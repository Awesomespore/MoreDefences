const SwarmT1 = extendContent(UnitType, "swarmer-ship", {});
SwarmT1.constructor = () => extend(UnitEntity, {});
Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(SwarmT1, 60 * 5, ItemStack.with(Items.silicon, 30, Items.titanium, 15)));
