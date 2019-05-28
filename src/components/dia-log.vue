<template>
    <div class="mask" @click="visiable">
        <div :style="[wrap,{backgroundImage:'url('+bUrl.path+')'}]" class="wrap" @click.stop="">
            <span class="close" @click="visiable"></span>
           <slot name="header"></slot>
           <slot name="body"></slot>
           <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            width:{
                default:'1360px',
                type:String
            },
            height:{
                default:'750px',
                type:String
            },
            bUrl:{
                type:Object,
            }
        },
        methods: {
            visiable() {
                this.$emit("visiable")
            }
        },
        computed: {
            wrap() {
                return {
                        width:this.width,
                        height:this.height
                    }   
            }
        },
    }
</script>

<style lang="stylus" scoped>
.mask{
    background-color  rgba(188,188,188,.5)
    width 100vw
    height 100vh
    display flex
    position fixed
    justify-content center
    align-items center
    top 0
    right 0
}
.close{
    background:url("~@/asset/images/icon.png")
    background-position: -149px -31px;
    width: 30px;
    height: 30px;
    position: absolute;
    top: -6px;
    right: -14px;
    display: inline-block;
    cursor: pointer
    z-index 99
}
.close:hover{
        background-position: -180px -31px;
}
.wrap{
     
 background-size: 100% 100%;
    position: relative;
 color: #ffffff;
    div{
        position relative
    }
}
</style>