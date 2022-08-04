<template>
  <form @submit.prevent class="flex flex-col">
    <AppInput placeholder="example@domain.ru" label="Электронная почта" />
    <AppButton class="mt-4">Войти</AppButton>
    <div class="mt-6 text-sm lg:text-base flex gap-x-2">
        <span>Нет профиля?</span>
        <span>Зарегистрируйтесь</span>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>