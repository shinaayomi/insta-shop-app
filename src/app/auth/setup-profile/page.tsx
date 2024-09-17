import ProfileSetup from "@/pages/Auth/ProfileSetup";

export default function ProfileSetupPage({
  searchParams,
}: {
  searchParams: { step?: string };
}) {
  const step = searchParams.step ?? "1";
  return (
    <div>
      <ProfileSetup step={step} />
    </div>
  );
}
