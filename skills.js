import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    showAddingCard: false,
    formBlocked: false,
    title: '',
    skill: {
      title: '',
      percent: 0,
      category: 0
    }
  }),
  components: {
    vcInput: () => import('components/input/input.vue/'),
    vcSkillsItem: () => import('components/skills-item/skills-item.vue/'),
    vcSkillsTitle: () => import('components/skills-title/skills-title.vue/'),
    vcSkillsAddNew: () => import('components/skills-add-new/skills-add-new.vue/'),
  },
  computed: {
    ...mapGetters('categories', ['getCategories']),
    ...mapState('user', {
      userID: state => state.user.id
    })
  },
  methods: {
    ...mapActions('categories', ['loadCategories']),
    hideCard () {
      this.showAddingCard = false;
    }
  },
  created () {
    this.loadCategories(this.userID);
  }
};
