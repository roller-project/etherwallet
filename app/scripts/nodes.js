'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ROLLER: "ROLLER",
    Custom: "CUSTOM"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'roller_offical': {
        'name': 'ROLLER',
        'blockExplorerTX': 'http://explorer.roller.today:3000/tx/[[txHash]]',
        'blockExplorerAddr': 'http://explorer.roller.today:3000/addr/[[address]]',
        'type': nodes.nodeTypes.ROLLER,
        'eip155': true,
        'chainId': 29021982,
        'tokenList': require('./tokens/akromaTokens.json'),
        'abiList': require('./abiDefinitions/akromaAbi.json'),
        'service': 'Roller Offical',
        'lib': new nodes.customNode('https://node.roller.today', '')
    }
};

nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;