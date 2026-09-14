import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  getAuthConfig,
  UserRepository,
  verifyAccessToken,
  type PublicUser,
} from "@quran-online/backend";
import { AUTH_COOKIE_NAME } from "@/lib/api/auth-response";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

async function getCurrentUser(): Promise<PublicUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const { jwtSecret } = getAuthConfig();
    const payload = await verifyAccessToken(token, jwtSecret);
    const user = await new UserRepository().findById(payload.sub);
    if (!user) return null;

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      course: user.course,
      createdAt: user.createdAt,
    };
  } catch {
    return null;
  }
}

const courseLabels: Record<PublicUser["course"], string> = {
  qaida: "Qaida",
  hifz: "Hifz",
  kirat: "Kirat",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main>
      <PageHero
        label="Dashboard"
        title={
          <>
            Welcome, <span className="text-teal">{user.firstName}</span>
          </>
        }
        description="You are signed in. Your learning dashboard will grow here as we add classes, progress, and schedules."
      />

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
            <article className="card-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Profile
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-navy">
                {user.firstName} {user.lastName}
              </h2>
              <p className="mt-2 text-sm text-text-muted">{user.email}</p>
            </article>

            <article className="card-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Selected course
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-navy">
                {courseLabels[user.course]}
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                Book a free trial anytime to begin your first live class.
              </p>
            </article>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/book-trial">Book Free Trial</Button>
            <Button href="/courses" variant="secondary">
              Browse Courses
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
