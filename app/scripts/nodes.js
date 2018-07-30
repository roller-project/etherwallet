'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    roller: "roller",
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
        'name': 'roller',
        'blockExplorerTX': 'https://roller.io/explorer/transaction/[[txHash]]',
        'blockExplorerAddr': 'https://roller.io/explorer/address/[[address]]',
        'type': nodes.nodeTypes.roller,
        'eip155': true,
        'chainId': 200625,
        'tokenList': require('./tokens/rollerTokens.json'),
        'abiList': require('./abiDefinitions/rollerAbi.json'),
        'service': 'roller Offical',
        'lib': new nodes.customNode('https://rpc.roller.io', '')
    }
};

nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;