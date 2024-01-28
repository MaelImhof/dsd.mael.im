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
     */
    import { data as people } from './../../.vitepress/data/contributors.data.js';
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>Contributeurs/Contributrices</template>
        <template #lead>
            Merci aux personnes ayant contribué à ce site!
            <p>
                Ce projet suit la <a class="all-contributors" href="https://allcontributors.org/docs/fr/emoji-key">spécification All Contributors</a>
            </p>
        </template>
    </VPTeamPageTitle>
    <VPTeamPageSection>
        <template #title>Mainteneurs/Mainteneuses</template>
        <template #lead>Responsables de la maintenance du site.</template>
        <template #members>
            <VPTeamMembers size="small" :members="people['maintainers']" />
        </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
        <template #title>Contributeurs/Contributrices</template>
        <template #lead>Ayant apporté leur pierre à l'édifice.</template>
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