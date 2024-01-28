---
layout: page
---

<script setup>
    import {
        VPTeamPage,
        VPTeamPageTitle,
        VPTeamMembers,
        VPTeamPageSection
    } from 'vitepress/theme';
    /*
     * This page loads the list of people to display from the
     * contributors.data.js file, in the .vitepress/data folder.
     * 
     * Please refer to the mentioned file for any changes in the
     * contributors list.
     * 
     * This relies on the Build-Time Data Loading feature of VitePress
     * https://vitepress.dev/guide/data-loading
     */
    import { data as people } from './../../.vitepress/data/contributors.data.js';
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>Contributors</template>
        <template #lead>
            Thank you to everyone who has contributed to this site!
            <p>
                This project follows the <a target="_blank" rel="noreferrer" class="all-contributors" href="https://allcontributors.org/docs/en/emoji-key">All Contributors specification</a>
            </p>
        </template>
    </VPTeamPageTitle>
    <VPTeamPageSection>
        <template #title>Maintainers</template>
        <template #lead>Responsible for site maintenance.</template>
        <template #members>
            <VPTeamMembers size="small" :members="people['maintainers']" />
        </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
        <template #title>Contributors</template>
        <template #lead>Having done their bit.</template>
        <template #members>
            <VPTeamMembers size="small" :members="people['contributors']" />
        </template>
    </VPTeamPageSection>
</VPTeamPage>

<style>
    a.all-contributors {
        text-decoration: underline;
    }
</style>