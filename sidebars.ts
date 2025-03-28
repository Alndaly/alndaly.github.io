import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
	frontEndSidebar: [{ type: 'autogenerated', dirName: 'frontend' }],
	healthSidebar: [{ type: 'autogenerated', dirName: 'health' }],
	financialSidebar: [{ type: 'autogenerated', dirName: 'finance' }],
	colorModulationSidebar: [{ type: 'autogenerated', dirName: 'color-modulation' }],
	photoGraphSidebar: [{ type: 'autogenerated', dirName: 'photograph' }],
	backEndSidebar: [{ type: 'autogenerated', dirName: 'backend' }],
	travelSidebar: [{ type: 'autogenerated', dirName: 'travel' }],
	toolsSidebar: [{ type: 'autogenerated', dirName: 'tools' }],
	anyThing: [{ type: 'autogenerated', dirName: 'others' }],
	mind: [{ type: 'autogenerated', dirName: 'psychology' }],
	ai: [{ type: 'autogenerated', dirName: 'artificial-intelligence' }],
};

module.exports = sidebars;
