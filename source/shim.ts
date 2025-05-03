export const shim = {
  classes: {
    diplomacy: { ui: { RacePanel: null } },
    Metadata: null,
    ui: { btn: { BuildingBtnModernController: null }, space: { PlanetPanel: null } },
    village: { ui: { VillageButtonController: null } },
  },
  com: {
    nuclearunicorn: {
      core: { TabManager: null },
      game: { ui: { BuildingNotStackableBtnController: null, BuildingStackableBtn: null } },
    },
  },
  mixin: {
    IChildrenAware: null,
    IGameAware: null,
  },
};
