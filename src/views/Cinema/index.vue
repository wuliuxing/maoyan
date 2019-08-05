 <template>
    <div>
        <Header/>
        <CiList/>
        <TabBar/>
    </div> 
</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import CiList from '@/components/CiList';

export default {
    name : 'Cinema',
    components : {
        Header,
        TabBar,
        CiList
    }
}
</script>
<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
