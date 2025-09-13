import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";

export default function DonatePage(){
  return (
    <>
      <Section>
        <h1 className="text-3xl font-extrabold">Donate & Sponsor</h1>
        <p className="text-gray-700 mt-3">
          Choose the best way to help the Sleeping Dog Project thrive.
          GoFundMe fuels our launch goal (first 10 bowls), while Givebutter powers
          ongoing monthly support and business sponsorships.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border p-5 bg-white">
            <h2 className="font-semibold">GoFundMe — Launch Goal</h2>
            <p className="text-sm text-gray-600 mt-1">
              Help us fund the first 10 bowls in Arizona. One-time gifts welcome!
            </p>
            <Button href="https://www.gofundme.com/f/SleepingDog" className="mt-3 no-underline">
              Fund the First 10 Bowls
            </Button>
          </div>

          <div className="rounded-2xl border p-5 bg-white">
            <h2 className="font-semibold">Givebutter — Monthly & Sponsors</h2>
            <p className="text-sm text-gray-600 mt-1">
              Become a monthly supporter or sponsor a bowl (logo/name inside).
            </p>
            <Button href="https://givebutter.com/sleepingdog" variant="outline" className="mt-3 no-underline">
              Sponsor or Give Monthly
            </Button>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          External links open in a new tab. Processing handled securely by each platform.
        </p>
      </Section>
    </>
  );
}
