import { ApiPromise, WsProvider } from '@polkadot/api';

const main = async () => {
  // Initialize the API
  const api = await ApiPromise.create({
    provider: new WsProvider('wss://moonbase-alpha.public.blastapi.io'),
  });

  try {
    // Get the pallet version from randomness pallet
    const version = await api.query.randomness.palletVersion();

    console.log('Randomness Pallet Version:', version.toString());

    process.exit(0);
  } catch (error) {
    console.error('Error querying randomness pallet version:', error);
    process.exit(1);
  }
};

// Execute the script
main().catch((error) => {
  console.error('Script error:', error);
  process.exit(1);
});
