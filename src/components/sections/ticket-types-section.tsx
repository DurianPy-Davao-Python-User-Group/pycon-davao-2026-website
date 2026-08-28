import TicketTypesSelector from './ticket-types-selector';

const TicketTypesSection = () => {
  return (
    <TicketTypesSelector
      registrationLinks={{
        kodigo: process.env.KODIGO_REGISTRATION_URL ?? '',
        coderKasosyo: process.env.CODER_KASOSYO_REGISTRATION_URL ?? '',
        kumpanya: process.env.KUMPANYA_REGISTRATION_URL ?? '',
      }}
    />
  );
};

export default TicketTypesSection;
