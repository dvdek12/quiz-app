const quizzes = await useQuizzes();

export default async (_name: any) => {
  const quiz = ref(quizzes.value?.find(({ name }) => name === _name));

  return quiz;
};
