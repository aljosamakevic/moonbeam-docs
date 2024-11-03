import { ApiPromise, WsProvider } from '@polkadot/api';

const main = async () => {
  // Initialize the API
  const api = await ApiPromise.create({
    provider: new WsProvider('wss://moonbase-alpha.public.blastapi.io'),
  });

  try {
    // Get the maximum number of candidates allowed
    const maxCandidates = await api.consts.parachainStaking.maxCandidates;

    console.log('Maximum Allowed Candidates:', maxCandidates.toString());

    process.exit(0);
  } catch (error) {
    console.error('Error querying max candidates:', error);
    process.exit(1);
  }
};

// Execute the script
main().catch((error) => {
  console.error('Script error:', error);
  process.exit(1);
});
