import TicketTypesSelector from './ticket-types-selector';

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

const TicketTypesSection = () => {
  return (
    <TicketTypesSelector
      registrationLinks={{
        kodigo: requireEnv('KODIGO_REGISTRATION_URL'),
        coderKasosyo: requireEnv('CODER_KASOSYO_REGISTRATION_URL'),
        kumpanya: requireEnv('KUMPANYA_REGISTRATION_URL'),
      }}
    />
  );
};

export default TicketTypesSection;
