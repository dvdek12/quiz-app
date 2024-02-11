const supabase = useSupabaseClient();

const { data: quizzes } = await supabase.from("quizzes").select();

export default async () => useState("quizzes", () => quizzes);
